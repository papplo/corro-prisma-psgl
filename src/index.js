import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { Spinner } from "./components/Spinner";
hydrateRoot(document.getElementById("root"), <Spinner />);