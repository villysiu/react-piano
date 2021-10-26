class Music < ApplicationRecord
    validates_presence_of :name, :notes
    validates_uniqueness_of :name, :message => '%{value} has already been taken'
    # validates :notes, :format => { with: /(([A-G]{1}[3-4]{1}[\s|\,]*){1,7}){1,4}/, message: '4 lines and 7 notes per line'}
   
end


