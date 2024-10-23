import React from 'react'

function Filter(props) {
 const sort=props.sortprouducts
const filter=props.filter
const brand=props.brand

 
  
  return (
    <div className='filter '>      <div className="result">تعداد محصولات:{props.item?.length}  محصول </div>
<div className="sort">
    <div className="sort-title">مرتب سازی بر اساس:</div>
    <div className="form-chekbox">
        <div className="form-gruop">
            <input type="radio" value="asc" name='radiovalue' onChange={sort} />
            <label htmlFor="">جدید ترین محصولات</label>
        </div>
        <div className="form-gruop" >
            <input type="radio"  value="desc" name='radiovalue' onChange={sort} />
            <label htmlFor="" >قدیمی ترین محصولات</label>
        </div>
    </div>
</div>
<div className="brand" value={brand} onChange={filter}>
<select name="" id="">
<option value="">همه</option>
<option value="samsung">سامسونگ</option>
<option value="iphone">آیفون</option>
<option value="motorola">موتورلا</option> 

<option value="lg">ال جی</option>
<option value="sony">سونی</option>
<option value="blackberry">بلک بری</option>
</select>
</div>
    </div>
  )
}

export default Filter

