class CreateMusics < ActiveRecord::Migration[6.1]
  def change
    create_table :musics do |t|
      t.string :name
      t.string :notes

      t.timestamps
    end
  end
end
