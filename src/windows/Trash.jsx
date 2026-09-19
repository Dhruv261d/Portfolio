import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { locations } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const Trash = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const trashItems = locations.trash?.children || [];

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Archive</h2>
      </div>

      <div className="p-6 bg-white h-full">
        {trashItems.length === 0 ? (
          <p className="text-gray-500 text-sm">Trash is empty.</p>
        ) : (
          <ul className="grid grid-cols-4 gap-6">
            {trashItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => openItem(item)}   // ✅ THIS WAS MISSING
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12"
                />
                <p className="text-sm mt-2 text-center truncate w-full">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");

export default TrashWindow;