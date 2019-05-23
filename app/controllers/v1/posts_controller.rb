class V1::PostsController < ApplicationController 
    def index 
        render :json => { :posts => [
            {
                :name => 'some-name', 
                :guid => '0415674d-a0e8-4748-af68-a5f53a05c453'
            }
        ]}.to_json 
    end 

end 
