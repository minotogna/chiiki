CREATE TABLE job
(
  id         BIGSERIAL                                                      NOT NULL PRIMARY KEY,
  added_time TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'UTC') NOT NULL,
  data       JSONB                                                          NOT NULL
)