import React from "react";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";
import ContactForm from ".";

export default {
  title: "ContactForm",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <ContactForm />;
MobileView.story = mobileViewPort;

export const TabletView = () => <ContactForm />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <ContactForm />;
DesktopView.story = desktopViewPort;
