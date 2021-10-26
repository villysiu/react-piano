# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

musics = Music.create!([
    {   
        
        name: 'Twinkle Twinkle Little Star',
        notes: "C3 C3 G3 G3 A3 A3 G3,
                F3 F3 E3 E3 D3 D3 C3,
                G3 G3 F3 F3 E3 E3 D3,
                G3 G3 F3 F3 E3 E3 D3,
                C3 C3 G3 G3 A3 A3 G3,
                F3 F3 E3 E3 D3 D3 C3".squish
    },
    {
       
        name: 'I can sing a rainbow',
        notes: "C3 D3 E3 D3 C3 E3 G3 G3,
                A3 F3 D3 G3 E3 C3 D3,
                E3 F3 G3 C3 B3 A3,
                G3 D3 G3 F3,
                E3 C3 E3 D3 C3".squish
    }
 ]) 
 
   