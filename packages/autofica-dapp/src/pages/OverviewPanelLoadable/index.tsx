import React from "react";
import Loadable from "react-loadable";

interface LoaderProps extends Loadable.LoadingComponentProps {}

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  return <div>Loading...</div>;
};

const OverviewPanelLoadable = Loadable({
  loader: () => import("../../components/OverviewPanel"),
  loading: Loader,
});

export { OverviewPanelLoadable };
