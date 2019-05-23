require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  def setup
    @img_obj = Image.new(image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3RyZZVjGm23hkH1Lp1xndGG
Skv6OlCkRtixg_f3siyp9UAY', tag_list: 'office, work')
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

  def test_tag_list
    assert @img_obj.valid?
    assert_equal @img_obj.tag_list, %w[office work]
  end

  def test_tag_list_empty
    @img_obj = Image.new(image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3RyZZVjGm23hkH1Lp
1xndGGSkv6OlCkRtixg_f3siyp9UAY')
    assert @img_obj.valid?
    assert_empty @img_obj.tag_list
  end
end
