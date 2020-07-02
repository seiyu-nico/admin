# admin
## 勤務時間つけ忘れ
- 適宜日時を変更してください
```
INSERT INTO attendances(
  `user_id`,
  `start_date`,
  `start_time`,
  `end_date`,
  `end_time`,
  `created_at`,
  `updated_at`
) VALUE (
  1,
  '2020-07-01',
  '08:36:00',
  '2020-07-01',
  '18:11:00',
  now(),
  now()
);
```