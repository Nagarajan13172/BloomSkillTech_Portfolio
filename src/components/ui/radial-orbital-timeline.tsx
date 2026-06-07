import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  /** Optional one-line deliverable shown in the detail card. */
  deliverable?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

// The nodes orbit on a fixed circle. Rotation pauses while the box is hovered.
const START_ANGLE = -90; // first node starts at the top
const RADIUS = 132;

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Pause the orbit while the user is inside the box (hovering) or reading a card.
  const paused = isHovered || activeNodeId !== null;

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);

    return () => clearInterval(timer);
  }, [paused]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setActiveNodeId(null);
    }
  };

  // Rotate the orbit so the given node lands at the top of the circle.
  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex === -1) return;
    setRotationAngle(-(nodeIndex / timelineData.length) * 360);
  };

  const toggleItem = (id: number) => {
    if (activeNodeId === id) {
      setActiveNodeId(null);
    } else {
      setActiveNodeId(id);
      centerViewOnNode(id);
    }
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = (index / total) * 360 + START_ANGLE + rotationAngle;
    const radian = (angle * Math.PI) / 180;

    const x = RADIUS * Math.cos(radian);
    const y = RADIUS * Math.sin(radian);

    return { x, y };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const activeItem =
    activeNodeId !== null
      ? timelineData.find((i) => i.id === activeNodeId) ?? null
      : null;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb uses the BloomSkill logo's lens colors (blue → indigo → magenta) */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#4e7ace] via-[#5948a7] to-[#b24d9b] animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/25 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-72 h-72 rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isActive = activeNodeId === item.id;
            const isRelated = isRelatedToActive(item.id);
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isActive ? 200 : 20,
              // Recede the rest of the orbit while a card is open.
              opacity: activeNodeId !== null && !isActive ? 0.15 : 1,
            };

            return (
              <div
                key={item.id}
                className="absolute cursor-pointer group transition-[transform,opacity] duration-700"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 transition-opacity duration-300 ${
                    isRelated ? "animate-pulse" : ""
                  } ${isActive || isRelated ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
                  style={{
                    background: `radial-gradient(circle, rgba(182,160,224,0.25) 0%, rgba(182,160,224,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  border-2 transition-all duration-300 transform
                  ${
                    isActive
                      ? "bg-[#5949a6] text-white border-[#e58bc4] shadow-lg shadow-[#5949a6]/50 scale-125"
                      : isRelated
                      ? "bg-[#b24d9b]/30 text-white border-[#e58bc4] animate-pulse"
                      : "bg-[#161425] text-white border-white/30 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:border-[#e58bc4] group-hover:bg-[#5949a6]/45 group-hover:shadow-[0_0_18px_rgba(137,127,208,0.45)]"
                  }
                `}
                >
                  <Icon size={26} />
                </div>

                <div
                  className={`
                  absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[0.7rem] font-semibold tracking-wider
                  transition-all duration-300
                  ${
                    isActive
                      ? "opacity-0"
                      : "text-white/70 group-hover:text-white group-hover:scale-105"
                  }
                `}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded detail card — centered in the circle so it never overflows */}
        {activeItem && (
          <Card className="absolute z-[300] left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-56 bg-[#101418]/92 backdrop-blur-xl border-white/15 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
            <CardContent className="p-4">
              <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[#e58bc4]">
                {activeItem.date} · {activeItem.category}
              </span>
              <CardTitle className="text-base mt-1.5 text-white">
                {activeItem.title}
              </CardTitle>
              <p className="text-xs text-white/75 mt-2 leading-relaxed">
                {activeItem.content}
              </p>
              {activeItem.deliverable && (
                <p className="text-[0.7rem] text-white/55 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                  <span className="font-semibold text-white/85">Deliverable:</span>{" "}
                  {activeItem.deliverable}
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
