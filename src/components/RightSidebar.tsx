// RightSidebar 에만 스크롤 주려면 어떻게?
// 버튼
// rowGap 주려면 Flex 나 Grid 주어야 함
export default function RightSidebar() {
  return (
    <div style={{ padding: '16px' }}>
      <aside>
        <div style={{ rowGap: '16px' }}>
          {/* 1) 앨범 자켓 */}
          <div style={{
            height: '380px',
            backgroundImage: 'url(https://i.scdn.co/image/ab67616d00001e0217a3b492679522901c5da94e)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>

          </div>
          {/* 2) 오디오 영상 */}
          {/* 3) 뮤직비디오 */}
          <div>
            뮤직비디오
          </div>

          {/* 오디오/비디오 스위치 버튼 */}
          <div>
            <button>Switch to audio</button>
          </div>

          {/* 노래제목, 아티스트명 */}
          <div>
            <div>
              <a>
                <span>Follow</span>
              </a>
            </div>
            <div>
              <a>
                <span>U-KNOW</span>
              </a>
            </div>
          </div>

          {/* Related music videos */}
          <div>
            <div>Related music videos</div>
            {/* 가로 스크롤 */}
            <div style={{ overflowX: 'auto' }}>
              {/* 뮤비 담는 컨테이너 */}
              <div style={{ display: 'flex', width: 'fit-content' }}>
                {/* 뮤비 블록 */}
                <div style={{ width: '210px' }}>
                  <div style={{
                    backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '109px'
                  }}>비디오 썸네일</div>
                  <div>WICKED</div>
                  <div>ALLDAY PROJECT</div>
                </div>
                <div style={{ width: '210px' }}>
                <div style={{
                    backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '109px'
                  }}>비디오 썸네일</div>
                  <div>WICKED</div>
                  <div>ALLDAY PROJECT</div>
                </div>
                <div style={{ width: '210px' }}>
                <div style={{
                    backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '109px'
                  }}>비디오 썸네일</div>
                  <div>WICKED</div>
                  <div>ALLDAY PROJECT</div>
                </div>
                <div style={{ width: '210px' }}>
                <div style={{
                    backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '109px'
                  }}>비디오 썸네일</div>
                  <div>WICKED</div>
                  <div>ALLDAY PROJECT</div>
                </div>
              </div>
            </div>
          </div>

          {/* About the artist */}
          <div>

            {/* 아티스트 사진 */}
            <div style={{
              height: '242px',
              backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div style={{ padding: '16px' }}>
                <div>About the artist</div>
              </div>
            </div>
            {/* 아티스트 정보 */}
            <div style={{ padding: '16px' }}>
              {/* 아티스트 이름 */}
              <div>U-KNOW</div>
              {/* 구독 리스너 수 및 팔로우 버튼*/}
              <div style={{ display: 'flex' }}>
                <div>68,089 monthly listeners</div>
                {/* 팔로우 버튼은 오른쪽 정렬 */}
                <div style={{ marginLeft: 'auto', alignContent: 'center' }}>
                  <button style={{ border: '1px solid #818181', borderRadius: '9999px' }}>Follow</button>
                </div>
              </div>

              {/* 설명 */}
              <div>U-KNOW made his debut in 2003 as a member of TVXQ!, "The Rising Gods of the East", well-known as the "Kings of K-pop" for their immense success and...</div>
            </div>
          </div>

          {/* Credits */}
          <div style={{ padding: '16px', gap: '12px', display: 'grid' }}>
            <div style={{ display: 'flex' }}>
              <div>Credits</div>
              <div style={{ marginLeft: 'auto' }}><button>Show all</button></div>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div>
                  <div>
                    <a>
                      <span>U-KNOW</span>
                    </a>
                  </div>
                  <div>
                    <span>Main Artist</span>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', alignContent: 'center' }}>
                  <button style={{ border: '1px solid #818181', borderRadius: '9999px' }}>Follow</button>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div>
                  <div>
                    <a>
                      <span>Young-Jin Yoo
                      </span>
                    </a>
                  </div>
                  <div>
                    <span>Composer, Arranger, Lyricist</span>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', alignContent: 'center' }}>
                  <button style={{ border: '1px solid #818181', borderRadius: '9999px' }}>Follow</button>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex' }}>
                <div>
                  <div>
                    <a>
                      <span>Thomas Troelsen</span>
                    </a>
                  </div>
                  <div>
                    <span>Composer, Arranger</span>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', alignContent: 'center' }}>
                  <button style={{ border: '1px solid #818181', borderRadius: '9999px' }}>Follow</button>
                </div>
              </div>
            </div>
          </div>

          {/* On tour */}
          <div style={{ padding: '16px' }}>

            {/* 타이틀 및 Show all 버튼 */}
            <div style={{ display: 'flex' }}>
              {/* 타이틀 */}
              <div>
                On tour
              </div>
              {/* Open queue 버튼 */}
              <div style={{ marginLeft: 'auto' }}>
                <button>Show all</button>
              </div>
            </div>
            {/* 투어 리스트 */}
            <div >
              <div style={{ display: 'flex', columnGap: '16px' }}>
                <div style={{ width: '15%' }}>
                  날짜
                </div>
                <div>
                  <div>
                    Bristol
                  </div>
                  <div>
                    Mac Ayres
                  </div>
                  <div>
                    Wed 7:00PM
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', columnGap: '16px' }}>
                <div style={{ width: '15%' }}>
                  날짜
                </div>
                <div>
                  <div>
                    Manchester
                  </div>
                  <div>
                    Mac Ayres
                  </div>
                  <div>
                    Thu 7:00PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next in queue */}
          <div style={{ padding: '16px' }}>
            {/* 타이틀 및 Open queue 버튼 */}
            <div style={{ display: 'flex' }}>
              {/* 타이틀 */}
              <div>
                Next in queue
              </div>
              {/* Open queue 버튼 */}
              <div style={{ marginLeft: 'auto' }}>
                <button>Open queue</button>
              </div>
            </div>
            {/* 내용 */}
            <div style={{ display: 'flex', columnGap: '16px' }}>
              {/* 앨범 자켓 */}
              <div style={{ width: '15%' }}>
                자켓
              </div>
              {/* 타이틀 및 아티스트명 */}
              <div>
                <div>
                  Slow Down
                </div>
                <div>
                  Mac Ayres
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside >
    </div >
  );
}
