// TODO: height: 240px 은 테스트용이므로 나중에 지우기
export default function Home() {
    return (
        <div style={{ height: 'calc(100vh - 140px)', overflowY: 'auto', paddingLeft: '40px', padding: '20px 40px', display: 'grid', rowGap: '24px' }}>
            {/* All, Music, Podcasts */}
            <div style={{ height: '40px', display: 'flex', columnGap: '8px', alignItems: 'center' }}>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>All</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Music</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Podcasts</div>
            </div>

            {/* 타일 8개 */}
            <div style={{ display: 'grid' }}>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>eAeon</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Liked Songs</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>ALLDAY PROJECT</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Mac Ayres</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>K-Pop Today (Japan)</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>2IGHT</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>G.Soul</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Victoria Monet</div>
                    </div>
                </div>
            </div>

            {/* Made For Mina Kim */}
            <section style={{ minWidth: 0 }}>
                <div>Made For Mina Kim</div>
                <div style={{ height: '250px', overflowX: 'auto', overflowY: 'hidden' }}>
                    <div style={{ display: 'flex', width: 'fit-content', columnGap: '18px' }}>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
                            <div>
                                <img style={{ borderRadius: '6px' }} src="https://i.scdn.co/image/ab67616d00001e024ba287ffc98735a7c801be3e"></img>
                            </div>
                            <div>설명</div>
                        </div>
                        <div style={{ width: '200px' }}>
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