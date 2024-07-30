import Image from "next/image";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center text-gray-700">
      <div className="w-6 h-6 relative mr-2">
        <Image
          src={author.node.avatar.url}
          fill={true}
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-l">{name}</div>
    </div>
  );
}
