import mitt from 'mitt';

/**
 * mitt
 * - 경량화된 이벤트 emitter 라이브러리
 * - 간단한 이벤트 기반 통신을 구현 가능
 * - 소켓 형식을 사용하기 때문에 사용할 때 켜주고 끝나면 꺼줘야함
 * */
export const emitter = mitt();

emitter.on.apply('*', (type, e) =>
  console.log(`# 이벤트로그 : ${type} -> ${e}`)
);
