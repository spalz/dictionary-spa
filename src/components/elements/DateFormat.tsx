import { FC } from "react";
import dayjs from "dayjs";

interface DateFormat {
    date: string;
    format: string;
}

const DateFormat: FC<DateFormat> = ({
    date = "2020-01-26 04:07:31",
    format = "DD MMMM YYYY",
}): any => dayjs(date).format(format);

export default DateFormat;
