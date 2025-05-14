import { LiaToolsSolid } from "react-icons/lia";
import getStyling from "./style";
import { FC } from "react";
import { IMappedIconProps } from "./interface";
import {
  IoBuildOutline,
  IoConstructOutline,
  IoSettingsOutline,
  IoHammerOutline,
  IoReaderOutline,
  IoAddCircleOutline,
  IoAdd,
  IoAlertCircleOutline,
  IoBagAddOutline,
  IoBatteryHalf,
  IoBatteryFull,
  IoBriefcaseOutline,
  IoBrushOutline,
  IoBulbOutline,
  IoCalculatorOutline,
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoCameraOutline,
  IoCarOutline,
  IoCarSportOutline,
  IoCardOutline,
  IoCartOutline,
  IoCashOutline,
  IoCellularOutline,
  IoChatboxEllipsesOutline,
  IoChatbubbleEllipsesOutline,
  IoCheckboxOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkDone,
  IoCheckmark,
  IoClipboardOutline,
  IoColorFillOutline,
  IoCutOutline,
  IoDesktopOutline,
  IoDocumentOutline,
  IoDocumentTextOutline,
  IoExtensionPuzzleOutline,
  IoFlameOutline,
  IoFlashOutline,
  IoFlashlightOutline,
  IoFlaskOutline,
  IoFunnelOutline,
  IoHelp,
  IoHomeOutline,
  IoHourglassOutline,
  IoInformation,
  IoKeyOutline,
  IoLibraryOutline,
  IoList,
  IoLocationOutline,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoWifiOutline,
  IoMailOutline,
  IoManOutline,
  IoPencilOutline,
  IoPeopleOutline,
  IoPowerOutline,
  IoPrintOutline,
  IoSaveOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const MappedIcon: FC<IMappedIconProps> = (props) => {
  const {
    icon: { name },
    taskIconStyleOverride,
  } = props;

  console.log(name);
  const styles = getStyling();

  if (name === "build-outline")
    return (
      <IoBuildOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "construct-outline")
    return (
      <IoConstructOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "settings-outline")
    return (
      <IoSettingsOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "hammer-outline")
    return (
      <IoHammerOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "reader-outline")
    return (
      <IoReaderOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "add-circle-outline")
    return (
      <IoAddCircleOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "add-outline")
    return (
      <IoAdd
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "alert-circle-outline")
    return (
      <IoAlertCircleOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "bag-add-outline")
    return (
      <IoBagAddOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "battery-half")
    return (
      <IoBatteryHalf
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "battery-full")
    return (
      <IoBatteryFull
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "briefcase-outline")
    return (
      <IoBriefcaseOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "brush-outline")
    return (
      <IoBrushOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "bulb-outline")
    return (
      <IoBulbOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "calculator-outline")
    return (
      <IoCalculatorOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "calendar-number-outline")
    return (
      <IoCalendarNumberOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "calendar-outline")
    return (
      <IoCalendarOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "call-outline")
    return (
      <IoCallOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "camera-outline")
    return (
      <IoCameraOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "car-outline")
    return (
      <IoCarOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "car-sport-outline")
    return (
      <IoCarSportOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "card-outline")
    return (
      <IoCardOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "card-outline")
    return (
      <IoCardOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "cart-outline")
    return (
      <IoCartOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "cash-outline")
    return (
      <IoCashOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "cellular-outline")
    return (
      <IoCellularOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "chatbox-ellipses-outline")
    return (
      <IoChatbubbleEllipsesOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "chatbubble-ellipses-outline")
    return (
      <IoChatboxEllipsesOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "checkbox-outline")
    return (
      <IoCheckboxOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "checkmark-circle-outline")
    return (
      <IoCheckmarkCircleOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "checkmark-done")
    return (
      <IoCheckmarkDone
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "checkmark-outline")
    return (
      <IoCheckmark
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "clipboard-outline")
    return (
      <IoClipboardOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "color-fill-outline")
    return (
      <IoColorFillOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "cut-outline")
    return (
      <IoCutOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "desktop-outline")
    return (
      <IoDesktopOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "document-outline")
    return (
      <IoDocumentOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "document-text-outline")
    return (
      <IoDocumentTextOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "extension-puzzle-outline")
    return (
      <IoExtensionPuzzleOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "flame-outline")
    return (
      <IoFlameOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "flash-outline")
    return (
      <IoFlashOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "flashlight-outline")
    return (
      <IoFlashlightOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "flask-outline")
    return (
      <IoFlaskOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "funnel-outline")
    return (
      <IoFunnelOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "help")
    return (
      <IoHelp
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "home-outline")
    return (
      <IoHomeOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "hourglass-outline")
    return (
      <IoHourglassOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "information")
    return (
      <IoInformation
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "key-outline")
    return (
      <IoKeyOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "library-outline")
    return (
      <IoLibraryOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "list-outline")
    return (
      <IoList
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "location-outline")
    return (
      <IoLocationOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "lock-closed-outline")
    return (
      <IoLockClosedOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "lock-open-outline")
    return (
      <IoLockOpenOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "wifi-outline")
    return (
      <IoWifiOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "mail-outline")
    return (
      <IoMailOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "man-outline")
    return (
      <IoManOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "pencil-outline")
    return (
      <IoPencilOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "people-outline")
    return (
      <IoPeopleOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "power-outline")
    return (
      <IoPowerOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "print-outline")
    return (
      <IoPrintOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "save-outline")
    return (
      <IoSaveOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  if (name === "videocam-outline")
    return (
      <IoVideocamOutline
        size={30}
        style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
      />
    );

  return (
    <IoHelp size={30} style={{ ...styles.rowIcon, ...taskIconStyleOverride }} />
  );
};

export default MappedIcon;
