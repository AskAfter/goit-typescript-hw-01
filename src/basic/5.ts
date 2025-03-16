enum DayOfWeek {
  Monday = 'workingDay',
  Tuesday = 'workingDay',
  Wednesday = 'workingDay',
  Thursday = 'workingDay',
  Friday = 'workingDay',
  Saturday = 'weekend',
  Sunday = 'weekend',
}

const isWeekend = (day: DayOfWeek): void => {
    console.log(day)
};

isWeekend(DayOfWeek.Sunday)
isWeekend(DayOfWeek.Monday)
