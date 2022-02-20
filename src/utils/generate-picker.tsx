import generatePicker from 'antd/lib/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';

export const GeneratePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
