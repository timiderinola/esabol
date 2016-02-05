class SitePagesController < ApplicationController
  def home
  end

  def about
  end

  def blog
    @post = Post.friendly.last
    if @post
      redirect_to @post
    else
      redirect_to root_path,
                  notice: 'Sorry, there is currently no blog post. Contact us if you have something to post.'
    end
  end

  def contact
  end
end
