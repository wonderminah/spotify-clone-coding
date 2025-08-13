// RightSidebar 에만 스크롤 주려면 어떻게?
export default function RightSidebar() {
  return (
    <div style={{ padding: '16px' }}>
      <aside>
        <div style={{ gap: '16px', display: 'grid' }}>
          {/* 오디오 선택 시: 영상 */}
          {/* 비디오 선택 시: 뮤직비디오 */}
          <div style={{ padding: '16px', border: '1px solid #242430' }}>
            뮤직비디오
          </div>

          {/* 오디오/비디오 스위치 버튼 */}
          <div style={{ padding: '16px', border: '1px solid #242430' }}>
            <button>Switch to audio</button>
          </div>

          {/* 노래제목, 아티스트명 */}
          <div style={{ padding: '16px', border: '1px solid #242430' }}>
            노래제목, 아티스트명
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
          <div style={{ padding: '16px', border: '1px solid #242430' }}>
            <div>Related music videos</div>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ width: '210px', height: '177px', border: '1px solid #242430' }}>
                <div>비디오 썸네일</div>
                <div>WICKED</div>
                <div>ALLDAY PROJECT</div>
              </div>
              <div style={{ width: '210px', height: '177px', border: '1px solid #242430' }}>
                <div>비디오 썸네일</div>
                <div>WICKED</div>
                <div>ALLDAY PROJECT</div>
              </div>
              <div style={{ width: '210px', height: '177px', border: '1px solid #242430' }}>
                <div>비디오 썸네일</div>
                <div>WICKED</div>
                <div>ALLDAY PROJECT</div>
              </div>
              <div style={{ width: '210px', height: '177px', border: '1px solid #242430' }}>
                <div>비디오 썸네일</div>
                <div>WICKED</div>
                <div>ALLDAY PROJECT</div>
              </div>
            </div>
          </div>

          {/* About the artist */}
          <div style={{ padding: '16px', border: '1px solid #242430' }}>
            <div>About the artist</div>
            <div style={{ width: '356px', height: '242px' }}>
              사진
            </div>
            <div style={{ width: '356px', height: '142px' }}>
              <div>U-KNOW</div>
              <div>68,089 monthly listeners</div>
              <div>U-KNOW made his debut in 2003 as a member of TVXQ!, "The Rising Gods of the East", well-known as the "Kings of K-pop" for their immense success and...</div>
            </div>
          </div>

          {/* Credits */}
          <div style={{ padding: '16px', gap: '12px', display: 'grid', border: '1px solid #242430' }}>
            <div>Credits</div>
            <div style={{ width: '356px', height: '44px' }}>
              <div>
                <a>
                  <span>U-KNOW</span>
                </a>
              </div>
              <div>
                <span>Main Artist</span>
              </div>
            </div>
            <div style={{ width: '356px', height: '44px' }}>
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
            <div style={{ width: '356px', height: '44px' }}>
              <div>
                <a>
                  <span>Thomas Troelsen</span>
                </a>
              </div>
              <div>
                <span>Composer, Arranger</span>
              </div>
            </div>
          </div>

          {/* Next in queue */}
          <div>

          </div>
        </div>
      </aside>
    </div>
  );
}
