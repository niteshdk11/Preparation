const { NextResponse } = require("next/server");

export async  function GET(req){
const res = await fetch( 'https://api.freeapi.app/api/v1/public/randomusers/user/random')

const user = await res.json();

return NextResponse.json({messgae:"data is feteched",user:user})

}