import fs from 'node:fs/promises';
import path from 'node:path';

const DOCS_TRANSLATIONS_PATH = path.join(
  'docusaurus-plugin-content-docs',
  'current.json',
);

/**
 * Expose the current locale's documentation-sidebar labels to pages outside
 * the docs route. Docusaurus otherwise keeps these translations inside the
 * docs plugin and only supplies them to documentation layouts.
 */
export default function documentationMenuPlugin(context) {
  return {
    name: 'omi-documentation-menu',

    async loadContent() {
      const translationFile = path.join(
        context.localizationDir,
        DOCS_TRANSLATIONS_PATH,
      );

      try {
        const translations = JSON.parse(
          await fs.readFile(translationFile, 'utf8'),
        );

        return Object.fromEntries(
          Object.entries(translations).map(([id, value]) => [
            id,
            value.message,
          ]),
        );
      } catch (error) {
        if (error.code === 'ENOENT') return {};
        throw error;
      }
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}
