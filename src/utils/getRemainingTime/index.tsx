const getRemainingTime = ({
  startTime,
  endTime,
}: {
  startTime: string | Date;
  endTime: string | Date;
}) => {
  const remainingMilliseconds =
    new Date(endTime).valueOf() - new Date(startTime).valueOf();
  const remainingSeconds = Math.floor(remainingMilliseconds / 1000);
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const remainingHours = Math.floor(remainingMinutes / 60);
  const remainingDays = Math.floor(remainingHours / 24);

  return {
    days: remainingDays,
    hours: remainingHours % 24,
    minutes: remainingMinutes % 60,
    seconds: remainingSeconds % 60,
    milliseconds: remainingMilliseconds % 1000,
  };
};

export default getRemainingTime;
