\echo 'Delete and recreate potter db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE potter;
CREATE DATABASE potter;
\connect potter

\i potter-schema.sql
\i potter-seed.sql
