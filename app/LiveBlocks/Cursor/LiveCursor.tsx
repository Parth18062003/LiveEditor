import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";

const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];
// display all other live cursors
const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence}) => {
    if (presence == null || !presence?.cursor) {
      return null;
    }

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};

export default LiveCursors;