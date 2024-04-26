import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  }
);

export const myFunction = inngest.createFunction(
  { id: "import-pdocut-images" },
  { event: "shop/product.imported" },
  async ({ event, step }) => {
    return copyAllImagesToS3(event.data.imageURLs);
  }
);
