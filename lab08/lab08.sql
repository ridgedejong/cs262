-- Exercise 8.1
-- a.
-- SELECT *
-- FROM Game
-- ORDER BY time DESC

-- b.
-- SELECT *
-- FROM Game
-- WHERE time > '2020-10-16 00:00:00'

-- c.
-- SELECT name
-- FROM Player
-- WHERE name IS NOT NULL

-- d.
-- SELECT Player.ID
-- FROM Player, Game, PlayerGame
-- WHERE score > 2000
--   AND playerID = Player.ID
--   AND gameID = Game.ID

-- e.
-- SELECT *
-- FROM Player
-- WHERE emailAddress LIKE '%gmail%'

-- Exercise 8.2
-- a.
-- SELECT score
-- FROM Player, Game, PlayerGame
-- WHERE name = 'The King'
--   AND playerID = Player.ID
--   AND gameID = Game.ID

-- b.
-- SELECT name
-- FROM Player, Game, PlayerGame
-- WHERE time = '2006-06-28 13:20:00'
--    AND playerID = Player.ID
--    AND gameID = Game.ID
-- ORDER BY score DESC
-- LIMIT 1

-- c.
-- The inequality term keeps the query from matching a specific player in the first instance with itself in the second instance. So without it, The King with ID 2 will match with The King with ID 2, and the same situation for Dogbreath. But we want to find different players (different IDs) with the same name, so the inequality assures that we will only be able to find repeated names if they have different IDs. 

-- d.
-- You could join a table with itself to confirm that all of the IDs are unique. For each table, you could make a query that creates 2 instances and then compares the IDs. When a match is found, another unique field in that table (i.e. emailAddress, time) could be checked to confirm that it found itself. If it finds a match where this second field is different, it means a duplicate ID and can be outputted. This would be an easier way than simply outputting all of the IDs for a table and scrolling through them to manually check if there are no repeats. 

