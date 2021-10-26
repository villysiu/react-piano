class MusicsController < ApplicationController
    def index
        musics = Music.all
        render json: musics, except: [:created_at, :updated_at]
    end
    def show
        music = Music.find(params[:id])
        render json: music, except: [:created_at, :updated_at]
      end

    def create
        music = Music.new(name: params[:music][:name], notes: params[:music][:notes].squish.gsub(/\s*(?:,|$)\s*$/, ''))

        begin
            music.save!
            render json: music, except: [:created_at, :updated_at]
        rescue
            puts music.errors.full_messages
            render :json => { :errors => music.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def update
        music = Music.find(params[:id])
        begin 
            music.update!(name: params[:name], notes: params[:notes].squish.gsub(/\s*(?:,|$)\s*$/, ''))
            render json: music, except: [:created_at, :updated_at]
        rescue
            
            render :json => { :errors => music.errors.full_messages,  music: Music.find(params[:id]) }, status: :unprocessable_entity
        end
       
    end
    def destroy
        music = Music.find(params[:id]).destroy
        render json: music, except: [:created_at, :updated_at]
      end
      private

  def music_params
    params.require(:musics).permit(:id, :name, :notes)
  end
end
