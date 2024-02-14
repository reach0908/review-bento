import NextAuth from 'next-auth';

// TODO: 원하는 방식의 로그인 구현하기
const handler = NextAuth({});

export { handler as GET, handler as POST };
