import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const smooth = { ...clamp, easing: Easing.bezier(0.45, 0, 0.25, 1) };

const HousePlant: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy="10" rx="60" ry="13" fill="#254940" opacity="0.12" />
    <path d="M-43-92H43L32 0Q0 14-32 0Z" fill="#d7a07b" />
    <path d="M-38-86H38" stroke="#efc5a4" strokeWidth="8" />
    <path d="M0-91V-271M0-170L-47-225M0-202L48-255M0-132L55-182" fill="none" stroke="#477766" strokeWidth="7" />
    <path d="M0-259C-71-315-47-364 0-306C28-345 58-298 0-259Z" fill="#5c8d72" />
    <path d="M-43-219C-123-223-98-295-43-219ZM42-246C113-302 129-224 42-246ZM50-177C141-213 123-128 50-177Z" fill="#779f79" />
    <path d="M0-156C-93-202-85-127 0-156Z" fill="#406f60" />
  </g>
);

const LivingRoom: React.FC = () => (
  <>
    <defs>
      <linearGradient id="r1-wall" x2="0" y2="1"><stop stopColor="#fff8ed" /><stop offset="1" stopColor="#e9e6d5" /></linearGradient>
      <linearGradient id="r1-floor" x2="0.7" y2="1"><stop stopColor="#d7c8b0" /><stop offset="1" stopColor="#f1debf" /></linearGradient>
      <linearGradient id="r1-sofa" x2="0" y2="1"><stop stopColor="#7bada3" /><stop offset="1" stopColor="#427b73" /></linearGradient>
      <linearGradient id="r1-light"><stop stopColor="#fffce9" stopOpacity="0.68" /><stop offset="1" stopColor="#fffce9" stopOpacity="0" /></linearGradient>
      <linearGradient id="r1-shirt" x2="1" y2="0.4"><stop stopColor="#26a898" /><stop offset="1" stopColor="#187e76" /></linearGradient>
      <linearGradient id="r1-table" x2="0" y2="1"><stop stopColor="#d3a775" /><stop offset="1" stopColor="#a57850" /></linearGradient>
    </defs>
    <path d="M0 440H1080V1190L0 1250Z" fill="url(#r1-wall)" />
    <path d="M920 465L1080 410V1210L920 1170Z" fill="#dddcca" />
    <path d="M0 1240L920 1165L1080 1200V1920H0Z" fill="url(#r1-floor)" />
    <path d="M0 1237L920 1163L1080 1198" fill="none" stroke="#f9f3e6" strokeWidth="18" />
    <g fill="none" stroke="#b6a48b" strokeWidth="2" opacity="0.25"><path d="M180 1222L-80 1920M370 1207L270 1920M555 1192L590 1920M745 1178L910 1920M950 1180L1270 1920M0 1450L1080 1400M0 1720L1080 1680" /></g>
    <rect x="635" y="550" width="264" height="417" rx="8" fill="#d4bea0" />
    <rect x="650" y="566" width="234" height="382" fill="#d9ece6" />
    <path d="M651 815Q715 743 778 810Q834 701 884 765V946H651Z" fill="#a6c4a4" />
    <path d="M651 890Q766 797 884 866V946H651Z" fill="#7fa890" />
    <path d="M767 565V949M650 750H884" stroke="#fffcf4" strokeWidth="14" />
    <path d="M621 537Q605 764 628 982H654Q636 755 659 537ZM884 537Q911 755 891 983H919Q945 748 927 537Z" fill="#f4eedf" />
    <path d="M609 537H943" stroke="#9a8b72" strokeWidth="8" strokeLinecap="round" />
    <path d="M655 949L884 949L1010 1500L185 1560Z" fill="url(#r1-light)" />
    <g transform="translate(151 673) rotate(-4)"><rect width="181" height="204" rx="4" fill="#ad8a66" /><rect x="9" y="9" width="163" height="186" fill="#fbf2df" /><circle cx="94" cy="70" r="38" fill="#e6b675" /><path d="M15 167L67 98L124 161L168 122V186H15Z" fill="#8caa8f" /></g>
    <ellipse cx="332" cy="1247" rx="292" ry="82" fill="#f9f0dc" />
    <ellipse cx="339" cy="1231" rx="242" ry="34" fill="#3b5149" opacity="0.13" />
    <path d="M159 1155L151 1230M489 1165L500 1239" stroke="#7c644c" strokeWidth="17" />
    <rect x="126" y="941" width="416" height="223" rx="57" fill="url(#r1-sofa)" />
    <rect x="146" y="962" width="177" height="154" rx="34" fill="#8bb7ab" /><rect x="329" y="962" width="190" height="154" rx="34" fill="#81afa3" />
    <path d="M150 1120Q322 1103 524 1120V1171Q334 1192 150 1173Z" fill="#63968a" /><path d="M149 1124Q334 1112 524 1124" fill="none" stroke="#b6d0bc" strokeWidth="4" />
    <rect x="104" y="1060" width="68" height="128" rx="27" fill="#4d8176" /><rect x="507" y="1060" width="64" height="128" rx="27" fill="#4d8176" />
    <g transform="translate(190 1016) rotate(-12)"><rect width="92" height="103" rx="17" fill="#f6d79c" /><path d="M18 8V94M39 8V94M60 8V94M81 8V94" stroke="#dfbd82" strokeWidth="3" /></g>
    <HousePlant x={971} y={1222} scale={0.78} />
    <path d="M85 930V1113" stroke="#9b856a" strokeWidth="7" /><path d="M37 942L52 867H117L134 942Z" fill="#fbf5e4" /><ellipse cx="86" cy="1120" rx="43" ry="9" fill="#9b856a" />
  </>
);

type Point = { x: number; y: number };
// Two segment legs keep feet grounded through the sit/stand motion.
const kneeBetween = (hip: Point, ankle: Point): Point => {
  const dx = ankle.x - hip.x;
  const dy = ankle.y - hip.y;
  const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
  const bend = Math.sqrt(Math.max(0, 112 * 112 - (distance / 2) ** 2));
  return { x: (hip.x + ankle.x) / 2 + (dy / distance) * bend, y: (hip.y + ankle.y) / 2 - (dx / distance) * bend };
};

const FacelessWalker: React.FC = () => {
  const frame = useCurrentFrame();
  // Finish meal → approach sofa → begin sitting → stand → gentle walk away.
  const x = interpolate(frame, [0, 17, 49, 78, 95, 149], [635, 635, 403, 403, 441, 793], smooth);
  const y = interpolate(frame, [0, 49, 95, 149], [1395, 1284, 1298, 1398], smooth);
  const crouch = interpolate(frame, [0, 51, 66, 77, 94], [0, 0, 66, 66, 0], smooth);
  const moving = interpolate(frame, [0, 17, 25, 44, 51, 86, 98, 143, 149], [0, 0, 1, 1, 0, 0, 1, 1, 0.45], clamp);
  const step = Math.sin((frame - 17) * Math.PI / 14) * moving;
  const direction = (frame < 85 ? -1 : 1) * interpolate(frame, [78, 84, 85, 91], [1, 0.65, 0.65, 1], smooth);
  const hip = { x: -12 * (crouch / 66), y: -213 + crouch };
  const nearFoot = { x: 17 + step * 46, y: -Math.max(0, step) * 22 };
  const farFoot = { x: -15 - step * 46, y: -Math.max(0, -step) * 22 };
  const nearKnee = kneeBetween(hip, nearFoot);
  const farKnee = kneeBetween(hip, farFoot);
  const bodyBob = Math.abs(step) * 4;
  const lean = interpolate(frame, [0, 15, 51, 67, 79, 97], [10, 0, 0, 15, 15, -3], smooth);
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="12" cy="11" rx={75 - Math.abs(step) * 7} ry="15" fill="#283e36" opacity="0.19" />
      <g transform={`scale(${direction} 1)`}>
        <path d={`M${hip.x} ${hip.y}L${farKnee.x} ${farKnee.y}L${farFoot.x} ${farFoot.y - 12}`} fill="none" stroke="#30424a" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round" />
        <path d={`M${farFoot.x - 17} ${farFoot.y - 13}Q${farFoot.x + 2} ${farFoot.y - 25} ${farFoot.x + 25} ${farFoot.y - 7}L${farFoot.x + 39} ${farFoot.y - 3}V${farFoot.y + 4}H${farFoot.x - 20}Z`} fill="#d9e4df" />
        <path d={`M${hip.x + 10} ${hip.y}L${nearKnee.x} ${nearKnee.y}L${nearFoot.x} ${nearFoot.y - 12}`} fill="none" stroke="#42565c" strokeWidth="43" strokeLinecap="round" strokeLinejoin="round" />
        <path d={`M${nearFoot.x - 19} ${nearFoot.y - 14}Q${nearFoot.x + 2} ${nearFoot.y - 24} ${nearFoot.x + 26} ${nearFoot.y - 7}L${nearFoot.x + 43} ${nearFoot.y - 2}Q${nearFoot.x + 46} ${nearFoot.y + 6} ${nearFoot.x + 35} ${nearFoot.y + 6}H${nearFoot.x - 22}Z`} fill="#fff9ec" />
        <g transform={`translate(${hip.x} ${crouch - bodyBob}) rotate(${lean} 0 -213)`}>
          <path d={`M-12-348L${-26 + step * 36} -279L${-9 + step * 48} -225`} stroke="#16796f" fill="none" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M-34-353Q-10-369 19-356Q40-338 37-292L29-215Q0-203-34-221L-39-299Z" fill="url(#r1-shirt)" />
          <path d="M-25-347Q-31-303-23-260" fill="none" stroke="#73c5ae" strokeWidth="5" opacity="0.45" /><path d="M-29-225Q-2-217 30-224" fill="none" stroke="#146d65" strokeWidth="6" />
          <path d="M0-364V-386" stroke="#c99473" strokeWidth="26" strokeLinecap="round" />
          <path d="M-27-412Q-31-452-4-459Q27-462 32-431L38-412L30-407V-393Q15-375-9-387Q-26-394-27-412Z" fill="#e0ae88" />
          <path d="M-29-412Q-43-451-16-467Q15-479 31-451L28-435Q8-443-8-435L-13-410Z" fill="#37443d" /><path d="M-13-412Q-8-423-2-414V-404" fill="none" stroke="#c78f6d" strokeWidth="4" />
          <path d={`M17-337L${37 - step * 36} -281L${43 - step * 52} -234`} fill="none" stroke="#23a18f" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M${43 - step * 52} -243L${46 - step * 52} -222`} stroke="#e0ae88" strokeWidth="23" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
};

const MealTableForeground: React.FC = () => (
  <g>
    <path d="M227 1577L192 1900M811 1539L851 1830" stroke="#876244" strokeWidth="35" />
    <path d="M74 1481Q443 1330 830 1411L943 1562Q604 1713 168 1614Z" fill="#98734f" /><path d="M74 1457Q443 1306 830 1387L943 1538Q604 1689 168 1590Z" fill="url(#r1-table)" />
    <path d="M118 1474Q439 1348 824 1416M138 1501Q449 1381 848 1445M158 1531Q466 1414 870 1479" fill="none" stroke="#e8c799" strokeWidth="3" opacity="0.35" />
    <ellipse cx="621" cy="1460" rx="126" ry="53" fill="#745438" opacity="0.18" /><ellipse cx="622" cy="1447" rx="119" ry="49" fill="#fcf9ef" /><ellipse cx="622" cy="1446" rx="85" ry="32" fill="#e9e5d8" /><ellipse cx="622" cy="1445" rx="76" ry="26" fill="#f8f5e9" />
    <path d="M603 1441L610 1443M643 1448L647 1446M617 1455L621 1456" stroke="#b79c73" strokeWidth="3" strokeLinecap="round" />
    <path d="M781 1444L813 1512M767 1431L779 1452M777 1427L789 1448M787 1423L799 1444" stroke="#e8e9df" strokeWidth="7" strokeLinecap="round" /><path d="M479 1443L457 1508" stroke="#eeece1" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="416" cy="1398" rx="40" ry="17" fill="#886c50" opacity="0.18" /><path d="M391 1338H440L435 1392Q414 1406 395 1392Z" fill="#e0efea" opacity="0.85" /><ellipse cx="415" cy="1338" rx="25" ry="9" fill="#f4f8f0" /><ellipse cx="415" cy="1338" rx="19" ry="6" fill="#b9d7cf" />
    <path d="M219 1517L343 1486L430 1546L306 1581Z" fill="#f1e6ce" /><path d="M235 1522L313 1558L412 1539" fill="none" stroke="#dbcaaa" strokeWidth="3" />
  </g>
);

export const PostMealLifestyle: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Svg name="Post meal lifestyle · R1" viewBox="0 0 1080 1920" width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
      <Interactive.G name="Slow camera pullback" style={{ transformOrigin: "540px 1100px", scale: interpolate(frame, [0, 149], [1.045, 1], smooth), translate: interpolate(frame, [0, 149], ["-10px 18px", "0px 0px"], smooth) }}>
        <LivingRoom />
        <FacelessWalker />
        <Interactive.G name="Foreground dining table parallax" style={{ translate: interpolate(frame, [0, 149], ["0px 18px", "0px 0px"], smooth) }}><MealTableForeground /></Interactive.G>
      </Interactive.G>
      <g transform="translate(-60 1810) rotate(-16)"><path d="M0 160Q64-53 117-198" fill="none" stroke="#567160" strokeWidth="12" /><path d="M84-113C-30-276-90-101 84-113ZM112-189C212-359 287-187 112-189ZM29 21C189-105 209 80 29 21Z" fill="#577c63" /></g>
    </Interactive.Svg>
  );
};
