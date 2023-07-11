import type { PanelPassThroughMethodOptions } from 'primevue';

const button = {
  root: {
    class: (opts: PanelPassThroughMethodOptions) => {
      const baseClasses =
        'cursor-pointer p-3 border-round border-none flex gap-2';

      //const severityClasses = `bg-${} hover:bg-${}`

      return [baseClasses].join(' ');
    },
  },
  label: { class: 'text-white font-bold text-xl' },
  icon: { class: 'text-white text-2xl' },
};

export default {
  button,
};
