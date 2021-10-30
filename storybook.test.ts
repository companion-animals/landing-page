import path from "path";

import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from "@storybook/addon-storyshots";

jest.mock("global", () =>
  Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: "" } }),
);

class AnotherStories2SnapsConverter extends Stories2SnapsConverter {
  getSnapshotFileName(context: { fileName?: string }) {
    const { fileName } = context;
    const { dir, name: filename } = path.parse(fileName ?? "");
    const uniqueName = filename;
    const { snapshotsDirName, snapshotExtension } = this.options;

    return path.format({
      dir: path.join("src", dir, "..", snapshotsDirName),
      name: uniqueName,
      ext: snapshotExtension,
    });
  }

  getPossibleStoriesFiles(storyshotFile: string): string[] {
    const { dir, name } = path.parse(storyshotFile);
    const { storiesExtensions } = this.options;

    const [fileName] = name.split("@");

    return storiesExtensions.map((ext) =>
      path.format({
        dir: path.dirname(dir),
        name: fileName,
        ext,
      }),
    );
  }
}

initStoryshots({
  framework: "react",
  integrityOptions: { cwd: path.join(__dirname, "__snapshots__") },
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new AnotherStories2SnapsConverter({
    snapshotExtension: ".snap.js",
  }),
});
