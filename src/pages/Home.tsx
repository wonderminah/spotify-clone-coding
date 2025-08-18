// TODO: height: 240px 은 테스트용이므로 나중에 지우기
export default function Home() {
    return (
        <div style={{ backgroundColor: '#121212', borderRadius: '8px', height: 'calc(100vh - 140px)', overflowY: 'auto', paddingLeft: '40px', padding: '20px 40px', display: 'grid', rowGap: '24px' }}>
            {/* All, Music, Podcasts */}
            <div style={{ height: '40px', display: 'flex', columnGap: '8px', alignItems: 'center' }}>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>All</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Music</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Podcasts</div>
            </div>

            {/* 타일 8개 */}
            <div style={{
                display: 'grid',
                gridGap: '8px',
                // auto: 행 높이를 자동으로 맞춤
                // repeat(auto-fill, ...): 열을 가능한 한 많이 반복 생성, auto-fill: 컨테이너에 가능한 만큼 칸을 꽉 채움 (빈 칸이라도 열이 유지됨)
                // minmax(max(270px, 25%), 1fr): 최소 너비는 270px과 컨테이너 너비의 25%중 큰 것, 최대 너비는 나머지 1fr을 다른 칸들과 균등하게 나눔
                gridTemplate: 'auto/repeat(auto-fill, minmax(max(270px, 25%), 1fr))',
                // TODO: 미디어 쿼리를 써서 , min-width: 0일때는 (2, 1fr), min-width: 700px일때는 (4, 1fr)
                gridTemplateColumns: 'repeat(4, 1fr)' // 두 개의 열이 화면 크기에 맞춰 똑같이 늘었다 줄었다 함 
            }}>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', backgroundColor: '#ffffff1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minWidth: '55px',
                            minHeight: '55px'
                        }}></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* /album/ 뒤에 타겟 ID 들어가야 함 */}
                            <a draggable="false" title="K-Pop Today (Japan)" href="/album/">
                                <p style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    textWrap: 'balance',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                }}>K-Pop Today (Japan)</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Made For Mina Kim */}
            <section style={{ minWidth: 0 }}>
                <div>
                    <span >
                        <a draggable="false" href="/section/:id" className="text-medium">Made For Mina Kim</a>
                    </span>
                </div>
                <div style={{ height: '250px', overflowX: 'auto', overflowY: 'hidden' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jump back in */}
            <section style={{ minWidth: 0 }}>
                <div>Jump back in</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently played */}
            <section style={{ minWidth: 0 }}>
                <div>Recently played</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New releases for you */}
            <section style={{ minWidth: 0 }}>
                <div>New releases for you</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your top mixes */}
            <section style={{ minWidth: 0 }}>
                <div>Your top mixes</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended for today */}
            <section style={{ minWidth: 0 }}>
                <div>Recommended for today</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your favorite artists */}
            <section style={{ minWidth: 0 }}>
                <div>Your favorite artists</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Based on your recent listening */}
            <section style={{ minWidth: 0 }}>
                <div>Based on your recent listening</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Albums featuring songs you like */}
            <section style={{ minWidth: 0 }}>
                <div>Albums featuring songs you like</div>
                <div style={{ height: '250px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '180px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* K-Indie,Rock & Various Genres */}
        </div>
    );
}