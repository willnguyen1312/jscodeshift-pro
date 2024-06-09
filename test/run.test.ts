import { test } from "vitest";

import { run } from "jscodeshift/src/Runner";
import path from "node:path";

test("run should work", async () => {
  const transformPath = path.resolve("transform.js");
  const paths = ["foo.js", "bar"];
  const options = {
    dry: true,
    print: true,
    verbose: 1,
  };

  const res = await run(transformPath, paths, options);
  console.log(res);
});
