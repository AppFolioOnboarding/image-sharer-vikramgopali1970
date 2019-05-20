require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  def setup
    @img_obj = Image.new(image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3RyZZVjGm23hkH1Lp1xndGGSkv6OlCkRtixg_f3siyp9UAY')
  end

  def test_valid_url
    assert @img_obj.valid?
  end

  def test_invalid_url
    @img_obj.image_url = 'abcd'
    assert_not @img_obj.valid?, 'Image url is invalid'
    assert_equal ['is invalid'], @img_obj.errors.messages[:image_url]
  end

  def test_blank_url
    @img_obj.image_url = ''
    assert_not @img_obj.valid?, 'Image url cannot be blank'
    assert_equal ['is invalid', "can't be blank"], @img_obj.errors.messages[:image_url]
  end
end
