import {setup} from '@css-render/vue3-ssr';
import {defineNuxtPlugin} from '#app';
// I'm not sure whether the plugin is called twice in each refreshing
// Maybe it's expected. If you have more information about it, please comment in the issue

export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        const {collect} = setup(nuxtApp.vueApp);
        // @ts-ignore
        const originalRender = nuxtApp.ssrContext.renderMeta
        nuxtApp.ssrContext!.renderMeta = () => {
            // @ts-ignore
            const result = originalRender();
            return {
                // @ts-ignore
                headTags: result['headTags'] ? result['headTags'] + collect() : ''          // 组合样式跟head信息
            };
        };
    }
});

