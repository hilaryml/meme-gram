# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: 'tolkienfan111', email: 'tolkienrocks@email.com', password: 'tolkien')
user2 = User.create(username: 'theraven', email: 'theraven@email.com', password: 'edgarapoe')
user3 = User.create(username: 'acdoyle', email: 'acdoyle@email.com', password: 'sherlock')

post1 = Post.create(title: 'The Fall', content: 'Everything must have a beginning.')
post2 = Post.create(title: 'Mysterious Circumstances', content: 'It all started on a rainy Sunday afternoon.')

post_user1 = PostUser.create(user_id: 1, post_id: 1)
post_user2 = PostUser.create(user_id: 3, post_id: 2)
