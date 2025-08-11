import { byKey, isExtensionInfo, toNavLink } from "@/lib/utils";

const Extensions: React.FC<ExtensionsProps> = ({ extensions, onLinkClick }) => {
  const links = Object.values(extensions)
    .filter(isExtensionInfo)
    .map(toNavLink)
    .sort(byKey);

  return (
    <nav
      aria-label="Extensions"
      className="max-h-[calc(100vh-116px)] overflow-x-hidden overflow-y-auto flex flex-col p-4"
    >
      <div className="flex flex-col items-stretch gap-3">
        {links.map((link) => (
          <button
            className="w-full min-h-[1.6rem] box-border cursor-pointer text-left px-2 py-1 rounded hover:bg-accent"
            key={link.key}
            onClick={(e) => onLinkClick?.(e, link)}
            tabIndex={0}
            type="button"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Extensions;
