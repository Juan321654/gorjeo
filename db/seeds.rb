# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all 
Tag.destroy_all 
User.destroy_all



@user = User.create!(username: 'juan', email: 'juan@email.com', password: '123456')
puts "users #{User.count} created"
@tag1 = Tag.create!(name: 'travel')
@tag2 = Tag.create!(name: 'games')
@tag3 = Tag.create!(name: 'music')
puts "tags #{Tag.count} created"

@post1 = Post.create!(title: 'woo', content: 'had fun', tag:@tag2, user:@user)
puts "posts #{Post.count} created"