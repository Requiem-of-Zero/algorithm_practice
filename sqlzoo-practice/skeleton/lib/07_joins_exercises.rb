# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
    select movies.title
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where actors.name = 'Harrison Ford'
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
    select movies.title
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where actors.name = 'Harrison Ford' and castings.ord != 1
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
    select movies.title, actors.name
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where castings.ord = 1 and movies.yr = 1962
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  execute(<<-SQL)
    select movies.yr, count(movies.*)
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where actors.name = 'John Travolta'
    group by movies.yr
    having count(movies.*) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  execute(<<-SQL)
  select movies.title, actors.name
  from movies
  join castings on castings.movie_id = movies.id
  join actors on castings.actor_id = actors.id
  where movies.title in
    (select movies.title
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where actors.name = 'Julie Andrews')
  and castings.ord = 1
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  execute(<<-SQL)
    select actors.name
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where castings.ord = 1
    group by actors.name
    having count(movies.title) >= 15
    order by actors.name
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  execute(<<-SQL)
    select movies.title, count(actors.name)
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where movies.yr = 1978
    group by movies.title
    order by count(actors.name) desc, movies.title asc
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  execute(<<-SQL)
    select actors.name
    from movies
    join castings on castings.movie_id = movies.id
    join actors on castings.actor_id = actors.id
    where movies.title in
      (select movies.title
      from movies
      join castings on castings.movie_id = movies.id
      join actors on castings.actor_id = actors.id
      where actors.name = 'Art Garfunkel') and not actors.name = 'Art Garfunkel'
  SQL
end

# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer