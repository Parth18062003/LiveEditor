import { useOthers, useSelf } from "@/liveblocks.config";
import styles from "./Avatars.module.css";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className={styles.avatars}>
      {users.map(({ connectionId, info }) => {
        return (
          <>
            <Avatar
              key={connectionId}
              picture={info.picture}
              name={info.name}
            />
          </>
        );
      })}

      {currentUser && (
        <div className="relative ml-8 first:ml-0">
          <Avatar
            picture={currentUser.info.picture}
            name={currentUser.info.name}
          />
          <p className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-2 py-1 text-xs text-black">
            You
          </p>
        </div>
      )}
    </div>
  );
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.avatar} data-tooltip={name}>
      <img
        src={picture}
        className={styles.avatar_picture}
        data-tooltip={name}
      />
    </div>
  );
}
