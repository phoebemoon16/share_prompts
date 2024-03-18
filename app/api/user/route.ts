/*
 * @Author: wanghh
 * @Date: 2024-03-18 11:00:46
 * @LastEditors: wanghh
 * @LastEditTime: 2024-03-18 11:10:14
 * @Description:
 */
// 处理数据  功能很像 express 例如user.js
export async function GET() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Sam" },
  ];
  return new Response(JSON.stringify(users));
}

export async function PUT() {}

/***
 *  post put delete patch head options
 */
