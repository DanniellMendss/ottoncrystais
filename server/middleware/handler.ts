import {
  createStartHandler,
  defaultRenderHandler,
} from "@tanstack/react-start/server";
import { getRouter } from "../../src/router";
import { defineEventHandler } from "h3";

const handler = createStartHandler({
  createRouter: getRouter,
  renderHandler: defaultRenderHandler,
});

export default defineEventHandler((event) => {
  return handler(event);
});
