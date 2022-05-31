import { createApp } from 'vue';
import Dev from './serve.vue';

import ThokaUi from '@/entry.esm';

const app = createApp(Dev);
app.use(ThokaUi);

app.mount('#app');
