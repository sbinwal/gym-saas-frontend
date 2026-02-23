import * as Avatar from "@radix-ui/react-avatar";

type Props = {
  name?: string;
  image?: string;
};

const ProfileAvatar = ({ name = "Gym Admin", image }: Props) => {

  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar.Root className="w-9 h-9 rounded-full overflow-hidden
    flex items-center justify-center bg-yellow-400 cursor-pointer">

      {image && (
        <Avatar.Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      )}

      <Avatar.Fallback
        className="text-black font-semibold text-sm"
        delayMs={300}
      >
        {initials}
      </Avatar.Fallback>

    </Avatar.Root>
  );
};

export default ProfileAvatar;