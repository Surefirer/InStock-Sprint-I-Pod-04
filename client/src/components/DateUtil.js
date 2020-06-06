// new date format
const DateUtil = {
  now() {
    return new Date().toString();
  },
  months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  format(time) {
    const date = new Date(time);
    return `${
      this.months[date.getMonth()]
    }/${date.getDate()}/${date.getFullYear()}`;
  },
};

const DateFormat = () => DateUtil.format(DateUtil.now());

export { DateFormat };
export default DateUtil;
