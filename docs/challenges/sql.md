# Requêtes SQL

A vous de jouer ! 

```sql
-- récupérer toutes les promos, dans l'ordre alphabétique
SELECT * FROM "promo" ORDER BY "name" ASC;

-- récupérer tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT * FROM "student" ORDER BY "last_name" ASC, "first_name" ASC;

-- récupérer tous les étudiants de la promo 135
SELECT * FROM "student" WHERE promo_id = 135;

-- récupérer tous les étudiants mais uniquement leur nom de famille puis leur prénom
SELECT "last_name", "first_name" FROM "student";

-- récupérer les étudiants dont le nom ou le prénom ressemble à "max"
SELECT * FROM "student" WHERE "last_name" ILIKE '%max%' OR "first_name" ILIKE '%max%';

-- récupérer l'étudiant qui est le dernier dans l'ordre alphabétique (sur le nom de famille) de la promo Dragons

-- Problème => on ne connait pas l'ID de la promo Dragon !
-- Solution 1 : faire deux requêtes : 1 pour récupérer l'ID, l'autre pour récupérer l'étudiant
-- Solution 2 : combiner les deux requêtes précédentes (requêtes imbriquées)
-- Solution 3 : faire une requête jointe (S04E07) (par curiosité, on regardera à l'avance)

-- Solution 1
SELECT id FROM "promo" WHERE name = 'Dragons'; -- On récupère ID = 149
SELECT * FROM "student" WHERE promo_id = 149 ORDER BY "last_name" DESC LIMIT 1;

-- Solution 2 
SELECT * FROM "student" WHERE promo_id = (SELECT id FROM "promo" WHERE name = 'Dragons') ORDER BY "last_name" DESC LIMIT 1;

-- Solution 3 (bonus pour S04E07)
SELECT * 
FROM "student" JOIN "promo" 
  ON "student"."promo_id" = "promo"."id" 
WHERE "promo"."name" = 'Dragons' 
ORDER BY "student"."last_name" DESC 
LIMIT 1;
```

## Rappel 

Se connecter au serveur `pg.oclock.lan` via `psql`

