class TagsController < ApplicationController
  def index
    @tags = Tags.all

    render json: @tags
  end
end
