package com.anjanda.letsmeet.repository.mapper;

import java.util.List;

import com.anjanda.letsmeet.repository.dto.Store;

/**
 * 
 * @Date : 2021. 2. 4.
 * @Team : AnJanDa
 * @author : 임호빈
 * @deploy : 김동빈
 * @Project : 레쓰밋 :: backend
 * @Function : Store 관련 매퍼 인터페이스 클래스
 * @Description : StoreService 및 storemapper.xml 참고
 * 
 */

public interface StoreMapper {

	/* '동 이름'으로 가게 전체 조회 */
	public List<Store> selectStoreByDong(String dong) throws Exception;

	/* '좌표 값' 으로 해당 가게 조회 */
	public Store selectStoreByPoint(String lat, String lng) throws Exception;

	/* '중간 좌표 값'으로 일정 반경 내 가게들 조회 */
	public List<Store> selectStoreByMidPoint(String lat, String lng);

}
